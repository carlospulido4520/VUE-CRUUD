<template>
  <div style="margin:20px" class="text-center">
    <h1>Tabla de Estudiantes</h1>
    <div class="container">
      <!-- <b-table striped hover :items="STUDENTS"> </b-table> -->
      <b-form>
        <b-table :items="STUDENTS" :fields="cols">
          <template v-slot:cell(show_details)="row">
            <b-button type="submit" variant="danger" @click="borrar(row.item.id,id)">Eliminar</b-button>
            <b-button
              @click="row.toggleDetails"
              variant="warning"
              style="margin-left:20px"
            >{{row.detailsShowing ? 'Cancelar la' : ''}} Actualizar</b-button>
          </template>

          <!--Actualizar-->
          <template v-slot:row-details="row">
            <b-form>
              <b-form-group id="input-group-1" label="Code" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="number"
                  required
                  placeholder="Digite codigo"
                  v-model="model.code"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Nombre" label-for="input-2">
                <b-form-input
                  id="input-2"
                  required
                  placeholder="Digite Nombre"
                  v-model="model.name"
                ></b-form-input>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
                @click="PUT_STUDENTS([row.item.id,model])"
              >Actualizar</b-button>
            </b-form>
          </template>
        </b-table>
      </b-form>
      <div>
        <b-button variant="success" style="margin:20px" router-link to="/newStudent">Ingresar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { TypeStore } from "./../store/types/store.types";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StudentComponent",
  methods: {
    ...mapActions({
      GET_STUDENTS: TypeStore.actions.GET_STUDENTS,
      POST_STUDENTS: TypeStore.actions.POST_STUDENTS,
      DELETE_STUDENTS: TypeStore.actions.DELETE_STUDENTS,
      PUT_STUDENTS: TypeStore.actions.PUT_STUDENTS
    }),
    borrar: function(code,id) {
      this.DELETE_STUDENTS(code, 1), this.STUDENTS.splice(id, 1);
    }
    // bor: function(code) {
    // }
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypeStore.state.STUDENTS,
      PSTUDENT: TypeStore.state.PSTUDENT,
      PSTUDENT1: TypeStore.state.PSTUDENT1
    })
  },
  mounted() {
    this.GET_STUDENTS();
    this.POST_STUDENTS();
    this.DELETE_STUDENTS();
  },
  data() {
    return {
      cols: ["id", "code", "name", "show_details"],
      model: {
        name: "",
        code: ""
      }
    };
  }
};
</script>

<style scoped></style>
