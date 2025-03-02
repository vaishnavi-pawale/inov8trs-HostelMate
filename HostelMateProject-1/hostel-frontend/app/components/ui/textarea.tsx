//textarea component

export const Textarea: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ value, onChange }) => {
    return <textarea value={value} onChange={onChange} />;
};