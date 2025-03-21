import React from 'react'

const Post = ({ title, body, commentCount }) => {
    return (
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{body}</p>
          {commentCount !== undefined && (
            <p className="text-gray-500">Comments: {commentCount}</p>
          )}
        </div>
      );
}

export default Post

  