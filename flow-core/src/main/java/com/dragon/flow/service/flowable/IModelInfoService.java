package com.dragon.flow.service.flowable;

import com.dragon.flow.model.flowable.ModelInfo;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
public interface IModelInfoService extends IService<ModelInfo> {

    /**
     * 分页查询模型分页列表
     * @param modelInfo 参数
     * @param query 分页参数
     * @return
     */
    PagerModel<ModelInfo> getPagerModel(ModelInfo modelInfo, Query query);

    /**
     * 添加模型
     * @param modelInfo 参数
     * @param user 登录用户
     */
    ModelInfo saveOrUpdateModelInfo(ModelInfo modelInfo, User user) ;
    /**
     * 查询模型
     * @param modelKey modelKey
     */
    ModelInfo getModelInfoByModelKey(String modelKey) ;
    /**
     * 删除模型
     * @param ids ids
     */
    ReturnVo<String> deleteById(List<String> ids);
}
