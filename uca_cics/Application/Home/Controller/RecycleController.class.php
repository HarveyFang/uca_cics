<?php
namespace Home\Controller;
use Think\Controller;
class RecycleController extends Controller {

    //初始化
    public function _initialize(){
        if(!check_login()){
            header('Location:/Login/index'); 
        }
        if(session('admin_level')<9){
            $this->admin_error_show();
            die;
        }
    }

    //首页
    public function index(){
        $this->recycle_list_show();
    }

    //显示已删会员列表
    public function recycle_list_show(){
        $map                =   array();
        $map['deleted']     =   '1';
        $count          = M('member')->where($map)->count();
        $Page           = new \Think\Page($count,10);
        $show           = $Page->show();
        $member_list    = M('member')->where($map)->order('id')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('member_list',$member_list);
        $this->assign('page',$show);
        $this->display('recycle_list');
    }

    //恢复会员
    public function member_recycle(){
        $data_G = I('get.');
        if(!empty($data_G['id'])){
            $id         = $data_G['id'];
            $result     = M('member')->where(array('id'=>$id))->save(array('deleted'=>'0'));
            if(!empty($result)){
                $this->success('恢复成功！','/Recycle/index');
            }else{
                $this->error('查无此客户！','/Recycle/index');
            }
        }else{
            $this->error('查无此客户！','/Recycle/index');
        }
    }

    //显示管理员无权操作
    public function admin_error_show(){
        $this->display('admin_error');
    }
}
