"use client";

import React from 'react'
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { Button } from '@nextui-org/react';

function ConnectButton() {
    const { connect, connectors } = useConnect();
    const { isConnected, address, account } = useAccount();
    const { disconnect } = useDisconnect();
    return (
        <header className="flex justify-between p-2">
            {isConnected ? (
                <Button
                    onClick={() => disconnect()}
                    type="button"
                    color='danger'
                    variant='shadow'
                >
                    Disconnect
                </Button>
            ) : (
                <div className="flex justify-between ">
                    {connectors.map((connector) => (
                        <div className="mr-2" key={connector.id}>
                            <Button type='button' color='default' variant="flat" onClick={() => connect({ connector })}>
                                {connector.name}
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </header>
    )
}

export default ConnectButton;