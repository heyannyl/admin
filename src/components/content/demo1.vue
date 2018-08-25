<template>
    <div>
      <select name="month" id="month-select">
      </select>
    </div>
</template>

<script>
    export default {
        name: "demo1",
        mounted(){
          var list = {
            0:"1月",
            1:"2月",
            2:"3月",
            7:"8月"
          }

          for(let i in list) {

            var month_select = document.getElementById('month-select');
            var op = document.createElement('option');
            op.innerHTML = list[i];
            op.setAttribute('value', i);
            if((new Date()).getMonth() == i){
                op.setAttribute('selected', 'selected');
            }
            month_select.appendChild(op)
          }


        }
    }
</script>

<style scoped>
</style>
