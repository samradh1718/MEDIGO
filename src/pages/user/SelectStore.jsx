import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectStore = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    if (!window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["pharmacy"],
        componentRestrictions: { country: "in" },
        fields: ["name", "formatted_address", "place_id"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (place && place.place_id) {
        setSelectedStore({
          name: place.name,
          address: place.formatted_address,
          placeId: place.place_id,
        });
      }
    });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT – CONTEXT */}
        <div style={styles.left}>
          <div style={styles.step}>Step 2 of 3</div>
          <h1 style={styles.heading}>Select pharmacy</h1>

          <p style={styles.description}>
            Search and select the exact pharmacy prescribed by your doctor.
            Medigo does not reroute orders to partner stores.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Google Maps verified pharmacy</p>
            <p>✔ User-selected store only</p>
            <p>✔ Bill verified before delivery</p>
          </div>
        </div>

        {/* RIGHT – ACTION */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Search pharmacy</h2>

          <input
            ref={inputRef}
            style={styles.input}
            placeholder="Search pharmacy on Google Maps"
          />

          {selectedStore && (
            <div style={styles.confirmBox}>
              <strong>{selectedStore.name}</strong>
              <p>{selectedStore.address}</p>
            </div>
          )}

          <button
            style={{
              ...styles.cta,
              opacity: selectedStore ? 1 : 0.6,
            }}
            disabled={!selectedStore}
            onClick={() => navigate("/user/order/upload")}
          >
            Continue
          </button>

          <p style={styles.note}>
            Selected pharmacy will be locked for this order.
          </p>
        </div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fbfd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
  left: {
    width: "40%",
    padding: "40px",
    background: "#f4f9ff",
  },
  step: {
    fontSize: "13px",
    color: "#1e88e5",
    fontWeight: "600",
    marginBottom: "12px",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "16px",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "24px",
  },
  trustBox: {
    fontSize: "14px",
    lineHeight: "1.8",
    color: "#2e7d32",
  },
  right: {
    width: "60%",
    padding: "40px",
  },
  formTitle: {
    fontSize: "20px",
    marginBottom: "16px",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "16px",
  },
  confirmBox: {
    background: "#f1f8e9",
    padding: "14px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  cta: {
    width: "100%",
    padding: "14px",
    background: "#1e88e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
  note: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#666",
  },
};

export default SelectStore;
