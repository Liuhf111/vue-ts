/*
 * @Description: 
 * @Author: LHF
 * @Date: 2020-12-30 11:28:09
 * @LastEditTime: 2021-01-04 14:35:56
 */
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  change(path:string){
    this.$router.push(path);
  }
}
