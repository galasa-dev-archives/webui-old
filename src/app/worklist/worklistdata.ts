class WorklistData {

    id : string;
    runName : string;
    result : string;
    testClass : string;

    constructor({id = "", runName = "", result = "", testClass = ""} : { id? : string, runName? : string, result? : string, testClass? : string} = {}){
        this.id = id;
        this.runName = runName;
        this.result = result;
        this.testClass = testClass;
        }

}

export { WorklistData }