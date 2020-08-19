import {sTable} from "../index";

import './src/table-body.extend'
import tableMixins from './src/table.mixins'

if (!sTable.mixins) {
  sTable.mixins = []
}

sTable.mixins.push(tableMixins)
