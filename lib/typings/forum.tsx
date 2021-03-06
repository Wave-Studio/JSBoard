/*export interface OutputForumTypings {
  name: string;
  description: string;
  tags: Array<string>;
  page: number;
  search?: string;
  posts?: [
    {
      title: string;
      sampleContent: string;
      author: string;
      authorID: number;
      votes: number;
      authorPFPFormat: string; //jpg or gif
      postDate: string;
      updatedDate: string;
      //content: "This is an example post.", We only care about featching surface level details here
      locked: true;
      pinned: true;
      views: number;
      tags: Array<string>;
      replies: number;
      id: number;
    }
  ];
}*/

export interface OutputForumTypings {
	title: string;
	content: string;
	author: string;
	//authorID: number;
	votes: number;
	avatar: string; //jpg or gif
	postDate: string;
	updatedDate: string;
	//content: "This is an example post.", We only care about featching surface level details here
	locked: boolean;
	pinned: boolean;
	views: number;
	tags: string[];
	replies: number;
	id: number;
}

export interface NewThreadTypings {
	forumID: number;
	title: string;
	content: string;
	token: string;
	locked: boolean;
	pinned: boolean;
}

export interface OutputThreadTypings {
	success: boolean;
	message?: string;
	redirect?: string;
}
