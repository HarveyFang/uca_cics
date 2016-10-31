<?php
namespace Home\Controller;
use Think\Controller;
class MemberController extends Controller {

	//初始化
	public function _initialize(){
		if(!check_login()){
			header('Location:/Login/index'); 
		}
	}

	//首页
    public function index(){
    	$this->member_list_show();
    }

	//显示客户列表
    public function member_list_show(){
        $data_P = I('post.');
        $map    = array();
        if(!empty($data_P['name'])){
            $map['name']    =   array('like','%'.$data_P['name'].'%');
        }
        if(!empty($data_P['age_min'])){
            $map['age']    =   array('gt',$data_P['age_min']);
        }
        if(!empty($data_P['age_max'])){
            $map['age']    =   array('lt',$data_P['age_max']);
        }
        if(!empty($data_P['work'])){
            $map['work']    =   array('like','%'.$data_P['work'].'%');
        }
    	$M_member 		= M('member');
		$count 			= $M_member->where($map)->count();
		$Page 			= new \Think\Page($count,10);
		$show 			= $Page->show();
		$member_list 	= $M_member->where($map)->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();
		$this->assign('member_list',$member_list);
        $this->assign('page',$show);
        $this->assign('data_P',$data_P);
        $this->display('member_list');
    }

	//显示新增客户
    public function member_add_show(){
    	$this->display('member_add');
    }

	//新增客户
    public function member_add(){
    	$data_P = I('post.');
    	if(!empty($data_P)){
    		$data 	=	array();
    		$data['name'] 				=	$data_P['name'];
    		$data['age'] 				=	$data_P['age'];
    		$data['work'] 				=	$data_P['work'];
    		$data['address'] 			=	$data_P['address'];
    		$data['visa_history'] 		=	$data_P['visa_history'];
            $data['purpose']        	=   $data_P['purpose'];
            $data['phone']          	=   $data_P['phone'];
            $data['city_history']   	=   $data_P['city_history'];
            $data['remark_copywriter']  =   $data_P['remark_copywriter'];
            $data['remark_consultant']  =   $data_P['remark_consultant'];
            $data['remark_admin']   	=   $data_P['remark_admin'];
    		$result = M('member')->add($data);
    		if(empty($result)){
    			$this->error('保存失败！','/Member/member_add_show');
    		}else{
    			$this->success('保存成功！','/Member/member_add_show');
    		}
    	}else{
    		$this->display('member_add');
    	}
    }

    //显示编辑客户
    public function member_edit_show(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
    			$this->assign('member',$member);
    			$this->display('member_edit');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }

    //编辑客户
    public function member_edit(){
		$data_P = I('post.');
		if(!empty($data_P)){
			$id 		= $data_P['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
	    		$data 	=	array();
	    		$data['name'] 				=	$data_P['name'];
	    		$data['age'] 				=	$data_P['age'];
	    		$data['work'] 				=	$data_P['work'];
	            $data['remark_copywriter']  =   $data_P['remark_copywriter'];
	            $data['remark_consultant']  =   $data_P['remark_consultant'];
	            $data['remark_admin']   	=   $data_P['remark_admin'];
                if(!empty($data_P['address'])){
                    $data['address'] 		=	$data_P['address'];
                }
	    		$data['visa_history'] 	=	$data_P['visa_history'];
	    		$data['purpose'] 		=	$data_P['purpose'];
                if(!empty($data_P['phone'])){
                    $data['phone']          =   $data_P['phone'];
                }
	    		$data['city_history'] 	=	$data_P['city_history'];
	    		$result = M('member')->where(array('id'=>$id))->save($data);
	    		if(empty($result)){
	    			$this->error('更新失败！','/Member/member_list_show');
	    		}else{
	    			$this->success('更新成功！','/Member/member_list_show');
	    		}
    		}else{
	    		$this->error('查无此客户！','/Member/member_list_show');
	    	}
		}else{
			$this->error('查无此客户！','/Member/member_list_show');
		}
    }

    //删除客户
    public function member_delete(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$result 	= M('member')->where(array('id'=>$id))->delete();
    		if(!empty($result)){
    			$this->success('删除成功！','/Member/member_list_show');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }

    //显示客户详情
    public function member_info(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
    			$this->assign('member',$member);
    			$this->display('member_info');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }
}
