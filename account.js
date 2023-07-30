import d from "decimal.js";

import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";
import {Client} from "@ghasemkiani/dogechain-info-api";

import {util} from "./util.js";

class Account extends Obj {
	static {
		cutil.extend(this.prototype, {
			util,
			address: null,
			_client: null,
		});
	}
	get client() {
		if (cutil.na(this._client)) {
			this._client = new Client();
		}
		return this._client;
	}
	set client(client) {
		this._client = client;
	}
	async toGetBalance() {
		let account = this;
		let {client} = account;
		let {address} = account;
		let {balance} = await client.toGetBalance(address);
		balance = cutil.asNumber(balance);
		return balance;
	}
	async toGetBalance_() {
		let account = this;
		let {util} = account;
		let {decimals} = util;
		let {client} = account;
		let {address} = account;
		let {balance} = await client.toGetBalance(address);
		let balance_ = d(balance).mul(10 ** decimals).toFixed(0);
		return balance_;
	}
}

export {Account};
