<template>
  <article class="article">
    <h1>Upload 上传</h1>
    <p>通过点击或者拖拽上传文件</p>

    <h3>提示</h3>
    <div class="tip">
      <p>upload组件默认为自动上传模式。即当在系统文件选择弹框选取文件后，便会自动开始上传任务。</p>
      <p>如果需要手动触发上传事件，请设置<code>auto-upload</code>属性为<code>false</code>，
        并在触发事件的回调函数中使用<code>this.$refs.upload.submit();</code>手动提交。</p>
    </div>

    <h3>点击上传</h3>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          action="//jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList1">
          <s-button icon="export" size="small">上传</s-button>
          <div slot="tip" class="s-upload__tip">最多只能上传3个文件</div>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            action="//jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList1">
            <s-button icon="export" size="small">上传</s-button>
            <div slot="tip" class="s-upload__tip">最多只能上传3个文件</div>
          </s-upload>
          <script>
            export default {
              data() {
                return {
                  fileList1: []
                };
              },
              methods: {
                handleRemove(file, fileList) {
                  console.log(file, fileList);
                },
                handlePreview(file) {
                  console.log(file);
                },
                handleExceed(files, fileList) {
                  this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置 <code>limit</code> 和 <code>on-exceed</code> 来限制上传文件的个数和定义超出限制时的行为。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>拖拽上传</h3>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="iconfont icon-cloud"></i>
          <div class="s-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="iconfont icon-cloud"></i>
            <div class="s-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </s-upload>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>手动上传</h3>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          ref="upload2"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          :auto-upload="false">
          <s-button slot="trigger" icon="export" size="small">选取文件</s-button>
          <s-button style="margin-left: 10px;" size="small" icon="export" @click="submitUpload2">上传到服务器</s-button>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            ref="upload2"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            :auto-upload="false">
            <s-button slot="trigger" icon="export" size="small">选取文件</s-button>
            <s-button style="margin-left: 10px;" size="small" icon="export" @click="submitUpload2">上传到服务器</s-button>
          </s-upload>
          <script>
            export default {
              data() {
                return {
                  fileList2: []
                };
              },
              methods: {
                submitUpload2() {
                  if (this.$refs.upload2.uploadFiles.length === 0) {
                    this.$message({
                      type: 'warning',
                      message: '请至少选择一个文件！'
                    })
                    return
                  }
                  this.$refs.upload2.submit();
                  console.log('上传到服务器')
                },
                handleRemove(file, fileList) {
                  console.log(file, fileList);
                },
                handlePreview(file) {
                  console.log(file);
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>照片墙</h3>
    <p>使用 <code>list-type</code> 属性来设置文件列表的样式。</p>
    <div class="example">
      <div class="example-demo">
        <s-upload
          action="//jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="iconfont icon-plus"></i>
          <div slot="tip" class="s-upload__tip">只能上传.jpeg文件</div>
        </s-upload>
        <s-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <s-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="iconfont icon-plus"></i>
            <div slot="tip" class="s-upload__tip">只能上传.jpeg文件</div>
          </s-upload>
          <s-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </s-dialog>
          <script>
            export default {
              data() {
                return {
                  dialogImageUrl: '',
                  dialogVisible: false
                };
              },
              methods: {
                handleRemove(file, fileList) {
                  console.log(file, fileList);
                },
                handlePictureCardPreview(file) {
                  this.dialogImageUrl = file.url;
                  this.dialogVisible = true;
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>图片列表缩略图</h3>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList3"
          list-type="picture">
          <s-button size="small" icon="export">上传</s-button>
          <div slot="tip" class="s-upload__tip">只能上传.jpeg文件</div>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList3"
            list-type="picture">
            <s-button size="small" icon="export">上传</s-button>
            <div slot="tip" class="s-upload__tip">只能上传.jpeg文件</div>
          </s-upload>
          <script>
            export default {
              data() {
                return {
                  fileList3: []
                };
              },
              methods: {
                handleRemove(file, fileList) {
                  console.log(file, fileList);
                },
                handlePreview(file) {
                  console.log(file);
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>上传文件类型控制</h3>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          ref="upload4"
          action="http://192.168.211.220/systemmanager/sysInteriorTokenList/uploadSeedFile"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList4"
          :auto-upload="false"
          accept=".xlsx">
          <s-button slot="trigger" size="small" icon="export">选取文件</s-button>
          <s-button style="margin-left: 10px;" size="small" icon="export" @click="submitUpload4">上传到服务器</s-button>
          <div slot="tip" class="s-upload__tip">只能上传.xlsx文件</div>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            ref="upload4"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList4"
            :auto-upload="false"
            accept=".xlsx">
            <s-button slot="trigger" size="small" icon="export">选取文件</s-button>
            <s-button slot="trigger" style="margin-left: 10px;" size="small" icon="export" @click="submitUpload4">上传到服务器</s-button>
            <div slot="tip" class="s-upload__tip">只能上传.xlsx文件</div>
          </s-upload>

          <script>
            export default {
              data() {
                return {
                  fileList4: []
                };
              },
              methods: {
                submitUpload4() {
                  if (this.$refs.upload4.uploadFiles.length === 0) {
                    this.$message({
                      type: 'warning',
                      message: '请至少选择一个文件！'
                    })
                    return
                  }
                  this.$refs.upload4.submit();
                  console.log('上传到服务器')
                },
                handleRemove(file, fileList) {
                  console.log(file, fileList);
                },
                handlePreview(file) {
                  console.log(file);
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          如果需要限制上传文件为某个特定的文件类型，可以使用<code>accept</code>属性，它接受一个<code>String</code>类型的文件后缀名作为属性值（如：'.xls'、'.xlsx'、'jpeg'等）。
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>


    <h3>上传文件列表控制</h3>
    <p>通过 <code>on-change</code> 钩子函数来对列表进行控制</p>
    <div class="example">
      <div class="example-demo">
        <s-upload
          class="upload-demo"
          action="//jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList5">
          <s-button size="small" icon="export">上传</s-button>
        </s-upload>
      </div>
      <example-code>
        <textarea>
          <s-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList5">
            <s-button size="small" icon="export">上传</s-button>
          </s-upload>
          <script>
            export default {
              data() {
                return {
                  fileList5: []
                };
              },
              methods: {
                handleChange(file, fileList) {
                  this.fileList5 = fileList.slice(-3);
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attribute</h3>
    <s-tb>
      <s-tb-i title="action" desc="必选参数，上传的地址" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="headers" desc="设置上传的请求头部" type="object" value="-" init="-"></s-tb-i>
      <s-tb-i title="multiple" desc="是否支持多选文件" type="boolean" value="-" init="-"></s-tb-i>
      <s-tb-i title="data" desc="上传时附带的额外参数" type="object" value="-" init="-"></s-tb-i>
      <s-tb-i title="name" desc="上传的文件字段名" type="string" value="-" init="file"></s-tb-i>
      <s-tb-i title="with-credentials" desc="支持发送 cookie 凭证信息" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="show-file-list" desc="是否显示已上传文件列表" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="drag" desc="是否启用拖拽上传	" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="accept" desc="接受上传的文件类型（thumbnail-mode 模式下此参数无效）" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-preview" desc="点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据" type="function(file)" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-remove" desc="文件列表移除文件时的钩子" type="function(file, fileList)	" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-success" desc="文件上传成功时的钩子" type="function(response, file, fileList)" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-error" desc="文件上传失败时的钩子" type="unction(err, file, fileList)" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-progress" desc="文件上传时的钩子" type="function(event, file, fileList)" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-change" desc="文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用" type="function(file, fileList)" value="-" init="-"></s-tb-i>
      <s-tb-i title="before-upload" desc="上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。" type="function(file)" value="-" init="-"></s-tb-i>
      <s-tb-i title="list-type" desc="文件列表的类型" type="string" value="text/picture/picture-card" init="text"></s-tb-i>
      <s-tb-i title="auto-upload" desc="是否在选取文件后立即进行上传" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="file-list" desc="上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]" type="array" value="-" init="[]"></s-tb-i>
      <s-tb-i title="http-request" desc="覆盖默认的上传行为，可以自定义上传的实现" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="是否禁用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="limit" desc="最大允许上传个数" type="number" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-exceed" desc="文件超出个数限制时的钩子" type="function(files, fileList)" value="-" init="-"></s-tb-i>
    </s-tb>


    <h3>Methods</h3>
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
        <td>clearFiles</td>
        <td>清空已上传的文件列表（该方法不支持在 before-upload 中调用）</td>
        <td>—</td>
      </tr>
      <tr>
        <td>abort</td>
        <td>取消上传请求</td>
        <td>（ file: fileList 中的 file 对象 ）</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        fileList1: [],
        fileList2: [],
        fileList3: [],
        fileList4: [],
        fileList5: [],
        imageUrl: '',
        dialogImageUrl: '',
        dialogVisible: false,
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      submitUpload2() {
        console.log(this.$refs.upload2)
        if (this.$refs.upload2.uploadFiles.length === 0) {
          this.$message({
            type: 'warning',
            message: '请至少选择一个文件！'
          })
          return
        }
        this.$refs.upload2.submit();
        console.log("上传到服务器")
      },
      submitUpload4() {
        console.log(this.$refs.upload4)
        if (this.$refs.upload4.uploadFiles.length === 0) {
          this.$message({
            type: 'warning',
            message: '请至少选择一个文件！'
          })
          return
        }
        this.$refs.upload4.submit();
        console.log("上传到服务器")
      },
      handleAvatarScucess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleChange(file, fileList) {
        this.fileList5 = fileList.slice(-3);
      }
    }
  }
</script>

<style>
  .avatar-uploader .s-upload {
    width: 178px;
    border: 1px dashed #344458;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .s-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #3aa0ff;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
