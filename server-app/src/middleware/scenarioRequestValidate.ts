import { Request, Response, NextFunction } from "express";
import log from "../logger";
import { isUndefined } from "lodash";
import { fileConfigSchema, scenarioConfigSchema } from "../schema/scenarioRequest.schema";

const scenarioValidation = () => async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (isUndefined(req.files?.flexfile) && isUndefined(req.body.scenarioConfig))
      return res.status(400).send("Configuration required!")
    else if (isUndefined(req.files)) {
      await scenarioConfigSchema.validate(req.body.scenarioConfig)
      req.scenarioConfig = structuralizeScenarioRequest(null, req.body.scenarioConfig, -1)
    }
    else {
      const fileData:any = JSON.parse(req.files.flexfile.data)
      const scenarioIndex: number = req.body.scenarioIndex
      if (isUndefined(scenarioIndex))
        throw Error("scenarioIndex required")
      if (scenarioIndex > fileData.scenario.length - 1)
        throw Error("index out of bound");
      await fileConfigSchema.validate(fileData)
      req.scenarioConfig = structuralizeScenarioRequest(fileData, null, scenarioIndex)
    }
    return next();
  } catch (e: any) {
    log.error(e);
    return res.status(400).send(e.errors || e.message);
  }
}

const structuralizeScenarioRequest = (fileData: any, scenarioConfig: any, scenarioIndex: number) => {
  let scenario:any;
  let requests:any;
  if (fileData) {
    const scenarioId = fileData.scenario[scenarioIndex]._id
    requests = fileData.requests.filter((request: any, index: number) => request.scenarioId === scenarioId)
    scenario = fileData.scenario[scenarioIndex];
  } else {
    requests = scenarioConfig.requests
    scenario = scenarioConfig.scenario
  }
  requests = requests.length > 1 ? requests : requests[0];
  return { scenario, requests }
}

export default scenarioValidation;