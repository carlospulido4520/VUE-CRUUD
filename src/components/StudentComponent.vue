<template>
  <div style="margin:20px" class="text-center">
    <h1>Tabla de Estudiantes</h1>
    <div class="container">
      <!-- <b-table striped hover :items="STUDENTS"> </b-table> -->
      <b-form>
        <b-table :items="STUDENTS" :fields="cols">
          <template v-slot:cell(action)="row">
            <b-button
              type="submit"
              variant="danger"
              @click="borrar(row.item.id)"
              >Eliminar</b-button
            >
            <b-button variant="primary" style="margin-left:20px"
              >Actualizar</b-button
            >
          </template>
        </b-table>
      </b-form>
      <div>
        <b-button
          variant="success"
          style="margin:20px"
          router-link
          to="/newStudent"
          >Ingresar</b-button
        >
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
      DELETE_STUDENTS: TypeStore.actions.DELETE_STUDENTS
    }),
    borrar: function(code) {
      
      this.DELETE_STUDENTS.splice(code, 1),
      this.DELETE_STUDENTS(code, 1);
    }
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
      cols: ["id", "code", "name", "action"]
    };
  }
};
</script>

<style scoped></style>
