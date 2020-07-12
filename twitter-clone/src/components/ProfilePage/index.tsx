import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    EditButton,
    LocationIcon,
    CakeIcon,
    Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Lorena Mendes</h1>
            <h2>@lolamendes</h2>

            <p>Computer Science student at UFMG</p>

            <ul>
                <li>
                    <LocationIcon />
                    Belo Horizonte, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 26 de junho de 1998
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>214</strong>
                </span>
                <span>
                    <strong>558</strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;
