import React from "react";

export type Topic = {
  title: string;
  body: React.ReactNode;
};

const TopicList = ({ topics }: { topics: Topic[] }) => (
  <ol className="topics">
    {topics.map((topic, index) => (
      <li key={topic.title} className="topic">
        <span className="topic__num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3>{topic.title}</h3>
          {topic.body}
        </div>
      </li>
    ))}
  </ol>
);

export default TopicList;
