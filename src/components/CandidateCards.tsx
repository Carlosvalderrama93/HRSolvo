type CandidateData = {
  name: string;
  email: string;
  whatsapp: string;
  educationInfo: string;
  languages: string;
  yearsOfExperience: string;
  salary: string;
  vacancyInfo: string;
  address: string;
};

type CandidateProps = {
  candidateData: CandidateData;
  onUpdateCandidate: (updatedData: Partial<CandidateData>) => void;
};

function CandidateCard({ candidateData, onUpdateCandidate }: CandidateProps) {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    onUpdateCandidate({ [name]: value });
  }

  return (
    <div>
      <form>
        <div>
          <label>
            <strong>Name:</strong>{" "}
            <input
              type="text"
              name="name"
              value={candidateData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Email:</strong>{" "}
            <input
              type="email"
              name="email"
              value={candidateData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>cell:</strong>{" "}
            <input
              type="text"
              name="whatsapp"
              value={candidateData.whatsapp}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Salary:</strong>{" "}
            <input
              type="text"
              name="salary"
              value={candidateData.salary}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Address:</strong>{" "}
            <input
              type="text"
              name="salary"
              value={candidateData.address}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Languages:</strong>{" "}
            <input
              type="text"
              name="languages"
              value={candidateData.languages}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Position applied:</strong>{" "}
            <input
              type="text"
              name="vacancyInfo"
              value={candidateData.vacancyInfo}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Experience:</strong>{" "}
            <textarea
              name="yearsOfExperience"
              value={candidateData.yearsOfExperience}
              onChange={handleChange}
              rows={4}
              cols={50}
            />
          </label>
        </div>

        <div>
          <label>
            <strong>Education:</strong>{" "}
            <textarea
              name="educationInfo"
              value={candidateData.educationInfo}
              onChange={handleChange}
              rows={4}
              cols={50}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CandidateCard;
