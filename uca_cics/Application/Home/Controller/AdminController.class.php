<?php
namespace Home\Controller;
use Think\Controller;
class AdminController extends Controller {

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
        $this->admin_list_show();
    }

    //显示管理员列表
    public function admin_list_show(){
        $M_admin    = M('admin');
        $count      = $M_admin->count();
        $Page       = new \Think\Page($count,10);
        $show       = $Page->show();
        $admin_list = $M_admin->order('id')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('admin_list',$admin_list);
        $this->assign('page',$show);
        $this->display('admin_list');
    }

    //显示新增管理员
    public function admin_add_show(){
        $this->display('admin_add');
    }

    //新增管理员
    public function admin_add(){
        $data_P = I('post.');
        if(!empty($data_P)){
            $data   =   array();
            $data['username']   =   $data_P['username'];
            $data['password']   =   md5($data_P['password']);
            $data['level']      =   $data_P['level'];
            $result = M('admin')->add($data);
            if(empty($result)){
                $this->error('保存失败！','/Admin/admin_add_show');
            }else{
                $this->success('保存成功！','/Admin/admin_list_show');
            }
        }else{
            $this->display('admin_add');
        }
    }

    //显示编辑管理员
    public function admin_edit_show(){
        $data_G = I('get.');
        if(!empty($data_G['id'])){
            $id         = $data_G['id'];
            $admin     = M('admin')->where(array('id'=>$id))->find();
            if(!empty($admin)){
                $this->assign('admin',$admin);
                $this->display('admin_edit');
            }else{
                $this->error('查无此客户！','/Admin/admin_list_show');
            }
        }else{
            $this->error('查无此客户！','/Admin/admin_list_show');
        }
    }

    //编辑客户
    public function admin_edit(){
        $data_P = I('post.');
        if(!empty($data_P)){
            $id         = $data_P['id'];
            $admin     = M('admin')->where(array('id'=>$id))->find();
            if(!empty($admin)){
                $data   =   array();
                $data['username']   =   $data_P['username'];
                if(!empty($data_P['password'])){
                    $data['password']   =   md5($data_P['password']);
                }
                $data['level']      =   $data_P['level'];
                $result = M('admin')->where(array('id'=>$id))->save($data);
                if(empty($result)){
                    $this->error('更新失败！','/Admin/admin_list_show');
                }else{
                    $this->success('更新成功！','/Admin/admin_list_show');
                }
            }else{
                $this->error('查无此管理员！','/Admin/admin_list_show');
            }
        }else{
            $this->error('查无此管理员！','/Admin/admin_list_show');
        }
    }

    //删除管理员
    public function admin_delete(){
        $data_G = I('get.');
        if(!empty($data_G['id'])){
            $id         = $data_G['id'];
            $result     = M('admin')->where(array('id'=>$id))->delete();
            if(!empty($result)){
                $this->success('删除成功！','/Admin/admin_list_show');
            }else{
                $this->error('查无此客户！','/Admin/admin_list_show');
            }
        }else{
            $this->error('查无此客户！','/Admin/admin_list_show');
        }
    }

    //显示管理员无权操作
    public function admin_error_show(){
        $this->display('admin_error');
    }
}
