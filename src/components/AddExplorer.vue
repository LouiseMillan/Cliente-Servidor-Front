<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Explorer</h3>
      <div class="form-group">
        <label for="name">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="explorer.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="explorer.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="mission">Misión</label>
        <input
          type="text"
          class="form-control"
          id="mission"
          required
          v-model="explorer.mission"
          name="mission"
        />
      </div>
      <button @click="saveExplorer" class="btn btn-info">Agregar</button>
    </div>
    <div v-else>
      <h4> Explorer creado exitosamente. </h4>
      <button class="btn btn-info" @click="newExplorer">Add</button>
    </div>
  </div>
</template>

<script>
import ExplorerService from "../services/ExplorerService";
export default {
  name: "add-explorer",
  data() {
    return {
      explorer: {
        id: null,
        name: "",
        username: "",
        mission: ""
      },
      submitted: false
    };
  },
  methods: {
    saveExplorer() {
      var data = {
        name: this.explorer.name,
        username: this.explorer.username,
        mission: this.explorer.mission
      };
      ExplorerService.create(data)
        .then(response => {
          this.explorer.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newExplorer() {
      this.submitted = false;
      this.explorer = {};
    }
  }
};
</script>
