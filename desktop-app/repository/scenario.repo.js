const uuid = require("uuid")
const { Scenarios } = require("../modal/scenario.modal");

class ScenarioReadService {
  static async getScenarios(projectId) {
    try {
      const scenarios =await Scenarios.getAll(projectId)
      return scenarios
    } catch (error) {
      return []
    }
  }

}
class ScenarioWriteService {
  static addScenario(args) {
    const _id = uuid.v4()
    args._id = _id
    const newScenario = new Scenarios(args)
    const res = newScenario.save()
    return JSON.parse(res)
  }
}

module.exports = { ScenarioWriteService,ScenarioReadService }