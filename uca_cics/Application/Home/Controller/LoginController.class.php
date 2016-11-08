<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {

	//初始化
	public function _initialize(){
		if(check_login()){
			header('Location:/Index/index'); 
		}
	}

	//显示登录首页
    public function index(){
        $this->display('index');
    }

	//登录处理
    public function login(){
        $data_P = I('post.');
        if(empty($data_P['username'])||empty($data_P['password'])){
        	$this->error('请输入用户名和密码！','/Login/index');
        }
		$map 	= array();
		$map['username'] = $data_P['username'];
		$admin = M('admin')->where($map)->find();
		if(empty($admin)){
			$this->error('用户名不存在！请重新登录','/Login/index');
		}else{
			if(md5($data_P['password']) != $admin['password']){
				$this->error('用户名或密码错误！','/Login/index');
			}else{
				session('admin_username',$admin['username']);
				session('admin_level',$admin['level']);
				session('admin_id',$admin['id']);
				session('admin_login_time',time());
				cookie('admin_username',$admin['username']);
				cookie('admin_login_time',time());
				// $this->success('登录成功！','/Index/index','1');
				header("Location: /Index/index"); 
			}
		}
    }

	//退出处理
    public function logout(){
        session(null);
    	cookie(null);
		$this->success('您已退出登录！','/Login/index');
    }
}