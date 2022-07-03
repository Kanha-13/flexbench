const uuid = require("uuid")
const { Projects } = require("../modal/project.modal");

class ProjectReadService {
  static async getProjects(args) {
    try {
      const projects = await Projects.getAll()
      return projects;
    } catch (error) {
      return []
    }
  }
}

class ProjectWriteService {
  static addProject(args) {
    const _id = uuid.v4()
    args._id = _id
    const newProject = new Projects(args)
    const res = newProject.save()
    return JSON.parse(res)
  }
}

module.exports = { ProjectWriteService,ProjectReadService }