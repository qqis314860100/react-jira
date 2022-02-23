import React from "react";
import styled from "@emotion/styled";
import { Row } from "antd";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

/**
 *
 * grid 和 flex 各自的应用场景
 * 1.要考虑 是一维布局 还是 二维布局
 * 一般来说一维布局用flex，二维布局用grid
 * 2.是从内容出发还是从布局出发
 * 从内容出发：现有一组内容（数量一般不固定），然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格（数量一般比较固定），然后再把元素往里面填充
 * 从内容出发，用flex
 * 从布局出发，用grid
 */

function Authenticated() {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6rem 1fr;
`;

const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;
const Main = styled.main``;

export default Authenticated;
