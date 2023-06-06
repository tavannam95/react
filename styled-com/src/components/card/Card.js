import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    position: relative;
    width: 400px;
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 10px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit; //kế thừa cha
`;

const CardContent = styled.div`
    width: 80%;
    position: absolute;
    padding: 20px;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 10;
    bottom: 0;
    border-radius: 20px;
    background-color: white;
`;
const CardTop = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
`
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    column-gap: 12px;
    flex-shrink: 0;
`
const CardBottom = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
`
const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7d6aff 1.38%, #ffb86c 64.35%, #fc2872 119.91%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`


const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar src="https://cdn.dribbble.com/users/2400293/avatars/small/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144" alt="" />
                        <span>@Yafid</span>
                    </CardUser>
                    <div>
                        256
                    </div>
                </CardTop>
                <CardBottom>
                    <CardTitle>
                        Lorem, ipsum dolor.
                    </CardTitle>
                    <CardAmount>12, 000 SPL</CardAmount>
                </CardBottom>
            </CardContent>
        </StyledCard>
    );
};

export default Card;