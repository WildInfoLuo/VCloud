package com.yc.vcloud.utils;

import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

public class CouldTest {
	public static void main(String[] args) {
		//申请的端口     公共参数     TOP分配给应用的AppKey。
		TaobaoClient client = new DefaultTaobaoClient("http://gw.api.taobao.com/router/rest", "23439021",
				"2ff96457db9acae47ca7c6ee1c401611");
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend("123456");//使用用户类型
		req.setSmsType("normal");//必须是normal
		req.setSmsFreeSignName("云Vcloud");//短信模版签名
		req.setSmsParamString("{\"name\":\"1234\"}");//发送内容
		req.setRecNum("18274764151,15197462069");//接收手机号码,可以是多个手机号码，用,隔开
		req.setSmsTemplateCode("SMS_13191824");//申请的短信模版
		AlibabaAliqinFcSmsNumSendResponse rsp;
		try {
			rsp = client.execute(req);
			System.out.println(rsp.getBody());//输出发送情况
		} catch (ApiException e) {
			e.printStackTrace();
		}

	}
}
