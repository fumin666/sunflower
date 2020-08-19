<template>
  <article class="article">
    <h1>Form 表单</h1>
    <h3>典型表单</h3>
    <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
    <div class="example">
      <div class="example-demo">
        <s-form ref="form" :model="form" label-width="80px" style="width: 460px">
          <s-form-item label="活动名称" tip="123123">
            <s-input v-model="form.name"></s-input>
          </s-form-item>
          <s-form-item label="活动区域">
            <s-select v-model="form.region" placeholder="请选择">
              <s-option label="区域一" value="shanghai"></s-option>
              <s-option label="区域二" value="beijing"></s-option>
            </s-select>
          </s-form-item>
          <s-form-item label="活动时间">
            <s-col :span="11">
              <s-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></s-date-picker>
            </s-col>
            <s-col class="line" :span="2" style="text-align: center">-</s-col>
            <s-col :span="11">
              <s-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></s-time-picker>
            </s-col>
          </s-form-item>
          <s-form-item label="即时配送">
            <s-switch on-text="" off-text="" v-model="form.delivery"></s-switch>
          </s-form-item>
          <s-form-item label="活动性质">
            <s-checkbox-group v-model="form.type">
              <s-checkbox label="美食/餐厅线上活动" name="type"></s-checkbox>
              <s-checkbox label="地推活动" name="type"></s-checkbox>
              <s-checkbox label="线下主题活动" name="type"></s-checkbox>
              <s-checkbox label="单纯品牌曝光" name="type"></s-checkbox>
            </s-checkbox-group>
          </s-form-item>
          <s-form-item label="特殊资源">
            <s-radio-group v-model="form.resource">
              <s-radio label="线上品牌商赞助"></s-radio>
              <s-radio label="线下场地免费"></s-radio>
            </s-radio-group>
          </s-form-item>
          <s-form-item label="活动形式">
            <s-input type="textarea" v-model="form.desc"></s-input>
          </s-form-item>
          <s-form-item>
            <s-button  @click="onSubmit">立即创建</s-button>
            <s-button>取消</s-button>
          </s-form-item>
        </s-form>
      </div>
    </div>

    <h3> 行内表单</h3>
    <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
    <div class="example">
      <div class="example-demo">
        <s-form :inline="true" :model="formInline" class="demo-form-inline">
          <s-form-item label="审批人">
            <s-input v-model="formInline.user" placeholder="审批人"></s-input>
          </s-form-item>
          <s-form-item label="活动区域">
            <s-select v-model="formInline.region" placeholder="活动区域">
              <s-option label="区域一" value="shanghai"></s-option>
              <s-option label="区域二" value="beijing"></s-option>
            </s-select>
          </s-form-item>
          <s-form-item>
            <s-button @click="onSubmit">查询</s-button>
          </s-form-item>
        </s-form>
      </div>
    </div>

    <h3> 对齐方式</h3>
    <p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
    <div class="example">
      <div class="example-demo">
        <s-radio-group v-model="labelPosition" size="small">
          <s-radio-button label="left">左对齐</s-radio-button>
          <s-radio-button label="right">右对齐</s-radio-button>
          <s-radio-button label="top">顶部对齐</s-radio-button>
        </s-radio-group>
        <div style="margin: 20px;"></div>
        <s-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <s-form-item label="名称">
            <s-input v-model="formLabelAlign.name"></s-input>
          </s-form-item>
          <s-form-item label="活动区域">
            <s-input v-model="formLabelAlign.region"></s-input>
          </s-form-item>
          <s-form-item label="活动形式">
            <s-input v-model="formLabelAlign.type"></s-input>
          </s-form-item>
        </s-form>
      </div>
      <div class="example-code">
        <div class="description"><p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，可选值为 <code>top</code>、<code>left</code>，当设为<code>top</code> 时标签会置于表单域的顶部</p></div>
        <pre><code>
&lt;s-radio-group v-model="labelPosition" size="small"&gt;
  &lt;s-radio-button label="left"&gt;左对齐&lt;/s-radio-button&gt;
  &lt;s-radio-button label="right"&gt;右对齐&lt;/s-radio-button&gt;
  &lt;s-radio-button label="top"&gt;顶部对齐&lt;/s-radio-button&gt;
&lt;/s-radio-group&gt;
&lt;div style="margin: 20px;"&gt;&lt;/div&gt;
&lt;s-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"&gt;
  &lt;s-form-item label="名称"&gt;
    &lt;s-input v-model="formLabelAlign.name"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动区域"&gt;
    &lt;s-input v-model="formLabelAlign.region"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动形式"&gt;
    &lt;s-input v-model="formLabelAlign.type"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
&lt;/s-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> 表单验证</h3>
    <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
    <div class="example">
      <div class="example-demo">
        <s-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <s-form-item label="活动名称" prop="name">
            <s-input v-model="ruleForm.name"></s-input>
          </s-form-item>
          <s-form-item label="活动区域" prop="region">
            <s-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <s-option label="区域一" value="shanghai"></s-option>
              <s-option label="区域二" value="beijing"></s-option>
            </s-select>
          </s-form-item>
          <s-form-item label="活动时间" required>
            <s-col :span="11">
              <s-form-item prop="date1">
                <s-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></s-date-picker>
              </s-form-item>
            </s-col>
            <s-col class="line" :span="2">-</s-col>
            <s-col :span="11">
              <s-form-item prop="date2">
                <s-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></s-time-picker>
              </s-form-item>
            </s-col>
          </s-form-item>
          <s-form-item label="即时配送" prop="delivery">
            <s-switch on-text="" off-text="" v-model="ruleForm.delivery"></s-switch>
          </s-form-item>
          <s-form-item label="活动性质" prop="type">
            <s-checkbox-group v-model="ruleForm.type">
              <s-checkbox label="美食/餐厅线上活动" name="type"></s-checkbox>
              <s-checkbox label="地推活动" name="type"></s-checkbox>
              <s-checkbox label="线下主题活动" name="type"></s-checkbox>
              <s-checkbox label="单纯品牌曝光" name="type"></s-checkbox>
            </s-checkbox-group>
          </s-form-item>
          <s-form-item label="特殊资源" prop="resource">
            <s-radio-group v-model="ruleForm.resource">
              <s-radio label="线上品牌商赞助"></s-radio>
              <s-radio label="线下场地免费"></s-radio>
            </s-radio-group>
          </s-form-item>
          <s-form-item label="活动形式" prop="desc">
            <s-input type="textarea" v-model="ruleForm.desc"></s-input>
          </s-form-item>
          <s-form-item>
            <s-button @click="submitForm('ruleForm')">立即创建</s-button>
            <s-button @click="resetForm('ruleForm')">重置</s-button>
          </s-form-item>
        </s-form>
      </div>
      <div class="example-code">
        <div class="description"><p>Form 组件提供了表单验证的功能，只需要通过 <code>rule</code> 属性传入约定的验证规则，并 Form-Item 的
          <code>prop</code> 属相设置为需校验的字段名即可。校验规则参见 <a href="https://github.com/yiminghe/async-validator">async-validator</a>
        </p></div>
        <pre><code>
&lt;s-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"&gt;
  &lt;s-form-item label="活动名称" prop="name"&gt;
    &lt;s-input v-model="ruleForm.name"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动区域" prop="region"&gt;
    &lt;s-select v-model="ruleForm.region" placeholder="请选择活动区域"&gt;
      &lt;s-option label="区域一" value="shanghai"&gt;&lt;/s-option&gt;
      &lt;s-option label="区域二" value="beijing"&gt;&lt;/s-option&gt;
    &lt;/s-select&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动时间" required&gt;
    &lt;s-col :span="11"&gt;
      &lt;s-form-item prop="date1"&gt;
        &lt;s-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"&gt;&lt;/s-date-picker&gt;
      &lt;/s-form-item&gt;
    &lt;/s-col&gt;
    &lt;s-col class="line" :span="2"&gt;-&lt;/s-col&gt;
    &lt;s-col :span="11"&gt;
      &lt;s-form-item prop="date2"&gt;
        &lt;s-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"&gt;&lt;/s-time-picker&gt;
      &lt;/s-form-item&gt;
    &lt;/s-col&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="即时配送" prop="delivery"&gt;
    &lt;s-switch on-text="" off-text="" v-model="ruleForm.delivery"&gt;&lt;/s-switch&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动性质" prop="type"&gt;
    &lt;s-checkbox-group v-model="ruleForm.type"&gt;
      &lt;s-checkbox label="美食/餐厅线上活动" name="type"&gt;&lt;/s-checkbox&gt;
      &lt;s-checkbox label="地推活动" name="type"&gt;&lt;/s-checkbox&gt;
      &lt;s-checkbox label="线下主题活动" name="type"&gt;&lt;/s-checkbox&gt;
      &lt;s-checkbox label="单纯品牌曝光" name="type"&gt;&lt;/s-checkbox&gt;
    &lt;/s-checkbox-group&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="特殊资源" prop="resource"&gt;
    &lt;s-radio-group v-model="ruleForm.resource"&gt;
      &lt;s-radio label="线上品牌商赞助"&gt;&lt;/s-radio&gt;
      &lt;s-radio label="线下场地免费"&gt;&lt;/s-radio&gt;
    &lt;/s-radio-group&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="活动形式" prop="desc"&gt;
    &lt;s-input type="textarea" v-model="ruleForm.desc"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item&gt;
    &lt;s-button  @click="submitForm('ruleForm')"&gt;立即创建&lt;/s-button&gt;
    &lt;s-button @click="resetForm('ruleForm')"&gt;重置&lt;/s-button&gt;
  &lt;/s-form-item&gt;
&lt;/s-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> 自定义校验规则</h3>
    <div class="example">
      <div class="example-demo">
        <s-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <s-form-item label="密码" prop="pass">
            <s-input type="password" v-model="ruleForm2.pass" auto-complete="off"></s-input>
          </s-form-item>
          <s-form-item label="确认密码" prop="checkPass">
            <s-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></s-input>
          </s-form-item>
          <s-form-item label="年龄" prop="age">
            <s-input v-model.number="ruleForm2.age"></s-input>
          </s-form-item>
          <s-form-item>
            <s-button  @click="submitForm('ruleForm2')">提交</s-button>
            <s-button @click="resetForm('ruleForm2')">重置</s-button>
          </s-form-item>
        </s-form>
      </div>
      <div class="example-code">
        <div class="description"><p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证</p></div>
        <pre><code>
&lt;s-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"&gt;
  &lt;s-form-item label="密码" prop="pass"&gt;
    &lt;s-input type="password" v-model="ruleForm2.pass" auto-complete="off"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="确认密码" prop="checkPass"&gt;
    &lt;s-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item label="年龄" prop="age"&gt;
    &lt;s-input v-model.number="ruleForm2.age"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item&gt;
    &lt;s-button  @click="submitForm('ruleForm2')"&gt;提交&lt;/s-button&gt;
    &lt;s-button @click="resetForm('ruleForm2')"&gt;重置&lt;/s-button&gt;
  &lt;/s-form-item&gt;
&lt;/s-form&gt;
&lt;script&gt;
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> 动态增减表单项</h3>
    <div class="example">
      <div class="example-demo">
        <s-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <s-form-item
            prop="email"
            label="邮箱"
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
          >
            <s-input v-model="dynamicValidateForm.email"></s-input>
          </s-form-item>
          <s-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
          >
            <s-input v-model="domain.value"></s-input><s-button @click.prevent="removeDomain(domain)">删除</s-button>
          </s-form-item>
          <s-form-item>
            <s-button  @click="submitForm('dynamicValidateForm')">提交</s-button>
            <s-button @click="addDomain">新增域名</s-button>
            <s-button @click="resetForm('dynamicValidateForm')">重置</s-button>
          </s-form-item>
        </s-form>
      </div>
      <div class="example-code">
        <div class="description"><p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则</p></div>
        <pre><code>
&lt;s-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic"&gt;
  &lt;s-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
  &gt;
    &lt;s-input v-model="dynamicValidateForm.email"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'域名' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  &gt;
    &lt;s-input v-model="domain.value"&gt;&lt;/s-input&gt;&lt;s-button @click.prevent="removeDomain(domain)"&gt;删除&lt;/s-button&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item&gt;
    &lt;s-button  @click="submitForm('dynamicValidateForm')"&gt;提交&lt;/s-button&gt;
    &lt;s-button @click="addDomain"&gt;新增域名&lt;/s-button&gt;
    &lt;s-button @click="resetForm('dynamicValidateForm')"&gt;重置&lt;/s-button&gt;
  &lt;/s-form-item&gt;
&lt;/s-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> 数字类型验证</h3>
    <div class="example">
      <div class="example-demo">
        <s-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <s-form-item
            label="年龄"
            prop="age"
            :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
          >
            <s-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></s-input>
          </s-form-item>
          <s-form-item>
            <s-button  @click="submitForm('numberValidateForm')">提交</s-button>
            <s-button @click="resetForm('numberValidateForm')">重置</s-button>
          </s-form-item>
        </s-form>
      </div>
      <div class="example-code">
        <div class="description"><p>数字类型的验证需要在 <code>v-model</code> 处加上 <code>.number</code> 的修饰符，这是
          <code>Vue</code> 自身提供的用于将绑定值转化为 <code>number</code> 类型的修饰符。</p></div>
            <pre><code>
&lt;s-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm"&gt;
  &lt;s-form-item
          label="年龄"
          prop="age"
          :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
  &gt;
    &lt;s-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"&gt;&lt;/s-input&gt;
  &lt;/s-form-item&gt;
  &lt;s-form-item&gt;
    &lt;s-button  @click="submitForm('numberValidateForm')"&gt;提交&lt;/s-button&gt;
    &lt;s-button @click="resetForm('numberValidateForm')"&gt;重置&lt;/s-button&gt;
  &lt;/s-form-item&gt;
&lt;/s-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> Form Attributes</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>model</td>
        <td>表单数据对象</td>
        <td>object</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>rules</td>
        <td>表单验证规则</td>
        <td>object</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>inline</td>
        <td>行内表单模式</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>label-position</td>
        <td>表单域标签的位置</td>
        <td>string</td>
        <td>right/left/top</td>
        <td>right</td>
      </tr>
      <tr>
        <td>label-width</td>
        <td>表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>label-suffix</td>
        <td>表单域标签的后缀</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>show-message</td>
        <td>是否显示校验错误信息</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      </tbody>
    </table>
    <h3 id="form-methods"> Form Methods</h3>
    <table class="table">
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>validate</td>
        <td>对整个表单进行校验的方法</td>
        <td>Function(callback: Function(boolean))</td>
      </tr>
      <tr>
        <td>validateField</td>
        <td>对部分表单字段进行校验的方法</td>
        <td>Function(prop: string, callback: Function(errorMessage: string))</td>
      </tr>
      <tr>
        <td>resetFields</td>
        <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
    <h3 id="form-item-attributes"> Form-Item Attributes</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>prop</td>
        <td>表单域 model 字段</td>
        <td>string</td>
        <td>传入 Form 组件的 <code>model</code> 中的字段</td>
        <td>—</td>
      </tr>
      <tr>
        <td>label</td>
        <td>标签文本</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>label-width</td>
        <td>表单域标签的的宽度，例如 '50px'</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>required</td>
        <td>是否必填，如不设置，则会根据校验规则自动生成</td>
        <td>bolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>rules</td>
        <td>表单验证规则</td>
        <td>object</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>error</td>
        <td>表单域验证错误信息, 设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>show-message</td>
        <td>是否显示校验错误信息</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        numberValidateForm: {
          age: ''
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>