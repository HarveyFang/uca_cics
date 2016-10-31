<?php
	/**
     * 检查是否登录
     * @return 已登录	true
     * @return 未登录	false
     */
	function check_login(){
		$username   =   session('admin_username');
        $login_time =   session('admin_login_time');
        if(empty($username) || empty($login_time)){
            return false;
        }
        $end_time   =   session('admin_login_time') + C('LOGIN_VALI_TIME');
        $now_time   =   time();
        if($end_time < $now_time){
            return false;
        }
        if($now_time < $login_time){
            return false;
        }
        return true;
	}
?>
