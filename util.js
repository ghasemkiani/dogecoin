import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";

class Util extends Obj {
	static {
		cutil.extend(this.prototype, {
			decimals: 8,
		});
	}
}

const util = new Util();

export {Util, util};
