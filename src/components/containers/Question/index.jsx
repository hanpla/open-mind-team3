import { useEffect, useState } from "react";
import { getQuestions } from "@/apis/questions";

export default function QuestionList({ subjectId }) {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const data = await getQuestions(subjectId);
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuestions();
  }, [subjectId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p>{questions.length}개의 질문이 있습니다.</p>
        {questions.map((question) => (
          <div key={question.id}>
            <div>
              {!question.answer
                ? "미답변"
                : question.answer.isReject
                  ? "답변 거절"
                  : "답변 완료"}
            </div>
            <div>
              <div>
                <span>질문</span>
                <span>{new Date(question.createdAt).toLocaleString()}</span>
              </div>
              <p>{question.content}</p>
            </div>
            {question.answer && (
              <div>
                <img src alt="답변자이미지" />
                <div>
                  <div>
                    <span>답변자이름</span>
                    <span>답변 날짜</span>
                  </div>
                  <p>답변</p>
                </div>
              </div>
            )}
            <div>
              <button>좋아요 {question.like}</button>
              <button>싫어요 {question.dislike}</button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(true)}
        style={{ background: "blue", color: "white" }} // 테스트 스타일
      >
        질문 작성하기
      </button>

      {isOpen && (
        <PostModal subjectId={subjectId} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
