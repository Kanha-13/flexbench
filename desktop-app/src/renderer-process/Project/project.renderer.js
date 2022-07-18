const { deleteScenario } = require("../Scenario/scenario.renderer")

module.exports = {
  getProjects: () => new Promise((resolve, reject) => {
    global.ipcRenderer.send("getProjects", {})
    global.ipcRenderer.on("handle:getProjects", (event, fetchedData) => {
      resolve(fetchedData)
    })
  }),
  addProject: (name, description) => new Promise((resolve, reject) => {
    const newProject = {
      name: name,
      description: description
    }
    global.ipcRenderer.send("addProject", newProject)
    global.ipcRenderer.on("handle:addProject", (event, savedData) => {
      resolve(savedData)
    })
  }),
  updateProject: (name, description, _id) => new Promise((resolve, reject) => {
    const updatedProject = {
      name: name,
      description: description,
      _id: _id
    }
    global.ipcRenderer.send("updateProject", updatedProject)
    global.ipcRenderer.on("handle:updateProject", (event, savedData) => {
      resolve(savedData)
    })
  }),
  deleteProject: (projectId) => new Promise((resolve, reject) => {
    global.ipcRenderer.send("deleteProject", projectId)
    global.ipcRenderer.on("handle:deleteProject", async(event, deletedData) => {
      if (deletedData.deleteCount){
        await deleteScenario("projectId",projectId)
        resolve(deletedData.deleteCount)
      }
      else if(deletedData.error){
        reject(deletedData.error)
      }
    })
  })
}