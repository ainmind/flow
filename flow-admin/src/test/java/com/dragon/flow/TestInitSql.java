package com.dragon.flow;

import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.service.init.IInitSqlService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = FlowAdminApplication.class)
public class TestInitSql {

    @Autowired
    private IInitSqlService initSqlService;

    @Test
    public  void testInitSql(){
        initSqlService.initSql();
    }
}
