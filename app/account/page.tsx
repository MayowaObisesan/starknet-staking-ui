"use client";

import React, { useState } from "react";
import { num } from "starknet";
import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { useTokenBoundSDK } from "../hooks";

function Owner() {
    const [token_contract_address, set_token_contract_address] =
        useState<string>("");
    const [token_id, set_token_id] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState("");
    const [timer, setTimer] = useState<string>("");
    const [tba, setTba] = useState<string>("");
    const [tbaLock, setTbaLock] = useState<string>("");
    const [lock, setLock] = useState<boolean>(false);

    const { tokenbound } = useTokenBoundSDK();

    const handleAddressChange = (e: any) => {
        set_token_contract_address(e.target.value);
    };
    const handleTokenChange = (e: any) => {
        set_token_id(e.target.value);
    };

    const handleTimerChange = (e: any) => {
        setTimer(e.target.value);
    };

    const handleTbaChange = (e: any) => {
        setTba(e.target.value);
    };
    const handleTbaLockChange = (e: any) => {
        setTbaLock(e.target.value);
    };
    const handleGetAccount = async () => {
        if (token_contract_address.trim() === "" || token_id.trim() === "") {
            alert("All input fields cannot be empty");
            setLoading(false);
            return;
        }

        try {
            const account = await tokenbound.getAccount({
                tokenContract: token_contract_address,
                tokenId: token_id
            });

            if (account) {
                setAccount(num.toHex(account));
            }
            set_token_contract_address("");
            set_token_id("");

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLock = async () => {
        if (tba.trim() === "" || timer.trim() === "") {
            alert("All input fields cannot be empty");
            setLoading(false);
            return;
        }

        try {
            await tokenbound.lock({
                tbaAddress: tba,
                duration_in_sec: timer
            });

            setTba("");
            setTimer("");

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGetIsLocked = async () => {
        if (tbaLock.trim() === "") {
            alert("input field cannot be empty");
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            const lockStatus = await tokenbound.is_locked(tbaLock as string);
            if (lockStatus) {
                setLock(lockStatus[0]);
            }
            setTba("");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col items-center gap-y-4 p-4">
                <header className="font-bold text-2xl">Your Account</header>
                <div className="text-center text-balance">Details about your account</div>

                <Card className="flex flex-col flex-1 grow shrink-0 p-4 mt-8 w-full">
                    <CardBody>
                        <CardHeader className="block font-bold text-6xl text-center self-center">
                            0x123...789
                        </CardHeader>
                        <Divider className="my-4" />
                        <section className="flex flex-col gap-y-4 my-8">
                            <div className="font-bold text-xl">Account details</div>
                            <div className="flex flex-row items-center justify-center">
                                <span className="grow shrink-0">Locked: </span>
                                <span className="shrink grow-0">No</span>
                            </div>
                        </section>

                        <Button type="button" color="danger" isLoading={loading} disabled={!!loading} onClick={handleLock} className="font-medium">
                            Lock Account
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Owner;
