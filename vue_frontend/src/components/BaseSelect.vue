<script>
    export default {
        props : {
            label : {
                type : String,
                default : ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            options: {
                type: [Object],
                required: true
            },
            opt_key : {
                type : String,
                default : 'category',
                required : true
            }
        }
    }
</script>

<template>
    <label v-if="label">{{ label }}</label>
    <select v-bind="{...$attrs, onChange: ($event) => {$emit('update:modelValue', $event.target.value)}}" class="field" :value="modelValue"
        ><option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === modelValue"
          >{{ option }}</option>
      </select>
</template>