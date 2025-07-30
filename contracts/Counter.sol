// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

contract Counter{

    uint public count;
    address public owner;

    constructor(address _owner){
        owner = _owner;
    }

    function increment() public {
        count++;
    }
}