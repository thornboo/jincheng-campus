<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
})
</script>

<style lang="scss">
/* uView-ui */
@import 'uview-ui/theme.scss';

/* ColorUI */
@import 'colorui/main.css';
@import 'colorui/icon.css';
</style>
