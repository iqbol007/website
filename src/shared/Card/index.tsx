import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import './style.scss';
interface IPostCard {
	postImage: string;
	postContent: string;
	postOwner: string;
	postCreatedAt: string;
	postLikes?: number | string;
	onLike: (id: string | number) => void;
	postId: number | string;
}
const PostCard: React.FC<IPostCard> = ({
	postImage,
	postContent,
	postOwner,
	postCreatedAt,
	postLikes,
	onLike,
	postId,
}) => (
	<Card centered={true}  className={'card'}>
		<Card.Header className={'header-r'}>
			Hello
		</Card.Header>
		<Image src={postImage} ui={true} className={'image'}/>
		<Card.Content>
			<Card.Header>{postOwner}</Card.Header>
			<Card.Meta>
				<span className="date">{postCreatedAt}</span>
			</Card.Meta>
			<Card.Description>{postContent}</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<a>
				<Icon name="like" onClick={() => onLike(postId)}/>
				{postLikes}
			</a>
		</Card.Content>
	</Card>
);

export default PostCard;
