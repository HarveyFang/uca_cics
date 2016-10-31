<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {

	//初始化
	public function _initialize(){
		if(!check_login()){
			header('Location:/Login/index'); 
		}
	}

	//显示网站首页
    public function index(){
    	$admin_id 	=	session('admin_id');
    	$admin 		=	M('admin')->where(array('id'=>$admin_id))->find();
    	$this->assign('admin_username',$admin['username']);
        $this->display('index');
    }
}