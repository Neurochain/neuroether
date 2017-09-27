pragma solidity ^0.4.15;

/*
  Kernel Contract represents information about specific fixed machine learning kernel
  (trained model saved on IPFS and identified by its file id)

  Kernels are transferrable
  Kernel model data are updatable (but update simple creates new kernel)
  Price can be edited
 */

import './DataEntity.sol';

contract Kernel is DataEntity {
}
