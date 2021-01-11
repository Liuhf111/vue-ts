/*
 * @Description: 
 * @Author: LHF
 * @Date: 2020-12-30 14:53:48
 * @LastEditTime: 2020-12-30 16:03:04
 */
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Login extends Vue {
    fromInline: object = {
        user: "",
        password: "",
    };
    ruleInline: object = {
        user: [{
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
        },],
        password: [{
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
        },
        {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
        },
        ],
    };

    // handleSubmit(name:string) {
    //     this.$refs[name].validate((valid) => {
    //         if (valid) {
    //             this.$Message.success("Success!");
    //         } else {
    //             this.$Message.error("Fail!");
    //         }
    //     });
    // },
}

// export default {
//     data() {
//         return {
//             formInline: {
//                 user: "",
//                 password: "",
//             },
//             ruleInline: {
//                 user: [{
//                     required: true,
//                     message: "Please fill in the user name",
//                     trigger: "blur",
//                 }, ],
//                 password: [{
//                         required: true,
//                         message: "Please fill in the password.",
//                         trigger: "blur",
//                     },
//                     {
//                         type: "string",
//                         min: 6,
//                         message: "The password length cannot be less than 6 bits",
//                         trigger: "blur",
//                     },
//                 ],
//             },
//         };
//     },
//     methods: {
//         handleSubmit(name) {
//             this.$refs[name].validate((valid) => {
//                 if (valid) {
//                     this.$Message.success("Success!");
//                 } else {
//                     this.$Message.error("Fail!");
//                 }
//             });
//         },
//     },
// };