$(document).ready(function() {
		$('#submitBtn').tap(function() {
			var errorMsg = '';
			var username = $('#username').val();
			var company = $('#company').val();
			var phone = $('#phone').val();
			var message =$('#message').val();
			var position = $('#position').val();
			var email = $('#email').val();
			if (username == '') {
				errorMsg += '姓名不能为空！';
			} else if (company == '') {
				errorMsg += '公司不能为空！';
			} else if (position == '') {
				errorMsg += '职务不能为空！';
			} else if (phone == '') {
				errorMsg += '手机号不能为空！';
			} else if (!phone.match(/^1[34578]\d{9}$/)) {
				errorMsg += '手机格式不正确！';
			}else if (message == '') {
				errorMsg += '合作需求不能为空！';
			}else if (email == '') {
				errorMsg += '邮箱不能为空！';
			}
			if (errorMsg == '') {
				$(this).attr('disabled', 'disabled');
				$.ajax({
					type: "POST",
					url: "sign.php",
					data: "username=" + username + "&company=" + company + "&phone=" + phone + "&email=" + email + "&position=" + position + "&expect_cooperation=" + message + "&formHash=1",
					dataType: "json",
					success: function(data) {
						if (data.state == 1) {
							layer.open({
							    content: '报名成功！',
							    btn: ['确定']
							});
						} else if (data.state == 2) {
							layer.open({
							    content: '您已参与了报名!',
							    btn: ['确定']
							});
						} else {
							layer.open({
							    content: '报名失败！',
							    btn: ['确定']
							});
						}
						$('#username').val('');
						$('#company').val('');
						$('#phone').val('');
						$('#message').val();
						$('#position').val('');
						$('#email').val('');
						$('#submitBtn').removeAttr('disabled', '');
					}
				});
			} else {
				layer.open({
				    content: errorMsg,
				    btn: ['确定']
				});
			}
		});
	});