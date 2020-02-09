<template>
  <div class="container" id="ComponentWrap">
    <v-dialog id="AddModal"
        v-model="saving"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        attach>
      <v-card>
        <v-card-text>
          <v-form v-model="valid" class="container">
            <div id="AddDataTitleClassWrap" class="row">
                <v-text-field
                v-model="number"
                :counter="20"
                maxlength="20"
                label="Number"
                placeholder=" "
                @keyup="onChange"
                @change="onChange"
                :rules="numberRules"
                v-bind:class="{invalid: invalidNumber}"
                class="required"
                ref="numberField"
                id="FocusField"
                autofocus
                >
                </v-text-field>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saving: false,
      number: '',
      valid: false,
      invalidNumber: false,
      numberRules: [(v) => v => v && v.length <= 20 ? true : 'Invalid Number Format']
    }
  },
  methods: {
    create () {
      console.log('the refs', this.$refs)
      this.$refs.numberField.reset()
    },

    onChange () {
      const emptyPattern = /^\s?$/
      this.valid = /^\d+$/.test(this.number)
      this.invalidNumber = emptyPattern.test(this.number)
      const invalid = this.invalidNumber
      this.submittable = this.valid && !invalid
    }
  }
}
</script>
