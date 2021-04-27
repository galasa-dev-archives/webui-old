class WorklistData {

    id : string;
    runName : string;
    shortName : string;
    result : string;
    testClass : string;

    constructor({id = "", runName = "", shortName = "", result = "", testClass = ""} : { id? : string, runName? : string, shortName? : string, result? : string, testClass? : string} = {}){
        this.id = id;
        this.runName = runName;
        this.shortName = shortName;
        this.result = result;
        this.testClass = testClass;
        }

}

export { WorklistData }