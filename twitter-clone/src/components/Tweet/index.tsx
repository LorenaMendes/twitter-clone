import React from 'react';

import {
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Lorena</strong>
                        <span>@lolamendes</span>
                        <Dot />
                        <time>25 de jan</time>
                    </Header>

                    <Description>Água mole em pedra dura tanto bate até que fura</Description>

                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            14
                        </Status>
                        <Status>
                            <RetweetIcon />
                            14
                        </Status>
                        <Status>
                            <LikeIcon />
                            14
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;