module.exports.WORKER_STATE_DESTROYED = 0xFF;
module.exports.WORKER_STATE_UNINITIALIZED = 0;
module.exports.WORKER_STATE_OFFLINE = 1;
module.exports.WORKER_STATE_IDLE = 2;
module.exports.WORKER_STATE_ASSIGNED = 3;
module.exports.WORKER_STATE_READYFORDATAVALIDATION = 4;
module.exports.WORKER_STATE_VALIDATINGDATA = 5;
module.exports.WORKER_STATE_READYFORCOMPUTING = 6;
module.exports.WORKER_STATE_COMPUTING = 7;
module.exports.WORKER_STATE_INSUFFICIENTSTAKE = 8;
module.exports.WORKER_STATE_UNDERPENALTY = 9;

module.exports.WORKER_STATES = [
    "UNINITIALIZED",
    "OFFLINE",
    "IDLE",
    "ASSIGNED",
    "READYFORDATAVALIDATION",
    "VALIDATINGDATA",
    "READYFORCOMPUTING",
    "COMPUTING",
    "INSUFFICIENTSTAKE",
    "UNDERPENALTY"
];

module.exports.JOB_STATE_UNINITIALIZED = 0;
module.exports.JOB_STATE_GATHERINGWORKERS = 1;
module.exports.JOB_STATE_INSUFFICIENTWORKERS = 2;
module.exports.JOB_STATE_DATAVALIDATION = 3;
module.exports.JOB_STATE_INVALIDDATA = 4;
module.exports.JOB_STATE_COGNITION = 5;
module.exports.JOB_STATE_PARTIALRESULT = 6;
module.exports.JOB_STATE_COMPLETED = 7;

module.exports.JOB_STATES = [
    "UNINITIALIZED",
    "GATHERINGWORKERS",
    "INSUFFICIENTWORKERS",
    "DATAVALIDATION",
    "INVALIDDATA",
    "COGNITION",
    "PARTIALRESULT",
    "COMPLETED"
];

module.exports.RESULT_CODE_ADD_TO_QUEUE = 0;
module.exports.RESULT_CODE_JOB_CREATED = 1;

module.exports.BATCHES_COUNT_LIMIT = 10;
module.exports.JOBS_COUNT_LIMIT = Math.pow(2, 16) - 1; // uint16 size
module.exports.REQUIRED_DEPOSIT = 500 * Math.pow(10, 15);
module.exports.QUEUE_PROCEED_LIMIT = 10;

module.exports.EMPTY = "0x0000000000000000000000000000000000000000";
module.exports.BALANCE_INACCURACY = 5000;
