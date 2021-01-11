import { Component, Vue } from "vue-property-decorator";
import { User } from "../UserClass";
@Component({
    name:'MyTable'
})
export default class Table extends Vue {
  a: number = 10;
  //表头
  columns12: object[] = [
    {
      title: "Name",
      slot: "name",
    },
    {
      title: "Age",
      key: "age",
    },
    {
      title: "Address",
      key: "address",
    },
    {
      title: "Action",
      slot: "action",
      width: 150,
      align: "center",
    },
  ];
  //获取的待展示数据
  data6: User[] = [
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
    },
  ];
  //表格数据
  tabledata: User[] = [];
  // props: ["a", "columns12", "data6"],
  //对话框展示用户详情
  show(index: number) {
    this.$Modal.info({
      title: "User Info",
      content: `Name：${this.tabledata[index].name}<br>Age：${this.tabledata[index].age}<br>Address：${this.tabledata[index].address}`,
    });
  }
  //删除用户信息
  remove(index: number) {
    this.tabledata.splice(index, 1);
  }
  //页码改变（index=当前页码）
  changePage(index: number) {
    this.tabledata = this.data6.slice((index - 1) * 10, index * 10);
  }
  //数据总数
  get total() {
    return this.data6.length;
  }
  //初始化第一页数据
  mounted() {
    this.changePage(1);
  }
}
