import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";

export function ImageUpload({ files, setFiles }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    maxSize: 3145728,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="company logo preview" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Box>
      <Box
        {...getRootProps({ className: "dropzone" })}
        sx={{
          padding: 2,
          backgroundColor: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed #eeeeee",
          borderRadius: "2px",
          color: "bdbdbd",
          cursor: "pointer",
          "&:hover": {
            borderColor: "#2196f3",
          },
          "&:focus": {
            borderColor: "#2196f3",
          },
        }}
      >
        <input {...getInputProps()} />
        <p>Przeciągnij i upuść zdjęcie lub kliknij, aby wybrać plik</p>
      </Box>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </Box>
  );
}

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "100%",
  objectFit: "scale-down",
};
