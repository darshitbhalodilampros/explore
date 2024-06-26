/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type { V3SwapRouter, V3SwapRouterInterface } from "../V3SwapRouter";

const _abi = [
  {
    inputs: [],
    name: "FromAddressIsNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientETH",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBips",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsafeCast",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidAmountOut",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidSwap",
    type: "error",
  },
  {
    inputs: [],
    name: "V3TooLittleReceived",
    type: "error",
  },
  {
    inputs: [],
    name: "V3TooMuchRequested",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class V3SwapRouter__factory {
  static readonly abi = _abi;
  static createInterface(): V3SwapRouterInterface {
    return new utils.Interface(_abi) as V3SwapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): V3SwapRouter {
    return new Contract(address, _abi, signerOrProvider) as V3SwapRouter;
  }
}
