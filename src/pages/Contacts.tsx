import { SVGProps, useState } from "react";
import Button from "../components/Button";
import TableHeader from "../components/TableHeader";
import TableRowItem from "../components/TableRowItem";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { v4 as uuidv4 } from "uuid";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../redux/slices/contacts";
import ErrorMessage from "../components/ErrorMessage";

const headers = [
  { title: "Image", readOnly: true, hideMobile: true },
  { title: "Name" },
  { title: "Status" },
  { title: "Email Address", hideMobile: true },
  { title: "Mobile Number" },
  { title: "Actions", readOnly: true },
];

type ContactProps = {
  id: string;
  name: string;
  email: string;
  number: string;
  status: "active" | "inactive";
};

const Contacts = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editingContact, setEditingContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactProps | null>(
    null
  );
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    status: "inactive",
  });

  const contacts = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    if (editingContact) {
      dispatch(updateContact(formData));
    } else {
      dispatch(addContact({ ...formData, id: uuidv4() }));
    }
    setModal(false);
    setEditingContact(false);
    setFormData({
      id: "",
      name: "",
      email: "",
      number: "",
      status: "inactive",
    });
  };

  const openEditModal = (contact: ContactProps) => {
    setEditingContact(true);
    setFormData(contact);
    setModal(true);
  };

  const openDeleteModal = (contact: ContactProps) => {
    setSelectedContact(contact);
    setDeleteModal(true);
  };

  const handleDelete = () => {
    if (selectedContact) {
      dispatch(deleteContact(selectedContact.id));
      setDeleteModal(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <main className="relative flex flex-1 flex-col max-h-screen overflow-y-scroll">
      <div className="flex items-center p-4 lg:p-6">
        <h1 className="text-lg font-semibold md:text-2xl">Contacts</h1>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-end px-4 lg:px-6">
          <Button
            onClick={() => setModal(true)}
            icon={<AddIcon className="lucide lucide-circle-plus h-4 w-4" />}
            btnText="Add Contact"
          />
        </div>
        <div className="relative w-full overflow-auto px-4 lg:px-6 pt-6">
          {contacts.length > 0 ? (
            <table className="w-full caption-bottom text-sm">
              <TableHeader headers={headers} />
              <tbody className="[&_tr:last-child]:border-0">
                {contacts.map((contact) => (
                  <TableRowItem
                    key={contact.id}
                    name={contact.name}
                    status={contact.status}
                    email={contact.email}
                    number={contact.number}
                    onEdit={() => openEditModal(contact)}
                    onDelete={() => openDeleteModal(contact)}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <ErrorMessage />
          )}
        </div>
      </div>
      {modal && (
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-gray-400/50">
          <div className="flex items-center justify-center px-4 h-full">
            <div className="rounded-xl border shadow w-full bg-white max-w-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-2xl">
                  {editingContact ? "Edit Contact" : "Add Contact"}
                </h3>
                <p className="text-sm text-slate-500">
                  {editingContact
                    ? "Edit the details of the contact."
                    : "Enter the details to add a new contact."}
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="flex h-9 w-full rounded-md border border-gray-500 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:none focus-visible:none disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="flex h-9 w-full rounded-md border border-gray-500 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:none focus-visible:none disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none"
                      htmlFor="number"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="flex h-9 w-full rounded-md border border-gray-500 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:none disabled:cursor-not-allowed disabled:opacity-50"
                      id="number"
                      placeholder="+919999999999"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium leading-none">
                      Status
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value="active"
                          name="default-radio"
                          checked={formData.status === "active"}
                          onChange={() =>
                            setFormData((prevData) => ({
                              ...prevData,
                              status: "active",
                            }))
                          }
                          className="w-4 h-4 bg-gray-100 border-gray-300 accent-black focus:ring-none"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Active
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value="inactive"
                          name="default-radio"
                          checked={formData.status === "inactive"}
                          onChange={() =>
                            setFormData((prevData) => ({
                              ...prevData,
                              status: "inactive",
                            }))
                          }
                          className="w-4 h-4 bg-gray-100 border-gray-300 accent-black focus:ring-none"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 flex gap-4">
                <Button
                  varient="outline"
                  onClick={() => setModal(false)}
                  btnText="Cancle"
                />
                <Button
                  onClick={handleSave}
                  btnText={editingContact ? "Update" : "Save"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteModal && (
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-gray-400/50">
          <div className="flex items-center justify-center px-4 h-full">
            <div className="rounded-xl border shadow w-full bg-white max-w-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-2xl text-center">
                  Delete Contact
                </h3>
                <p className="text-sm text-slate-500 text-center">
                  Are you sure you want to delete this contact.
                </p>
              </div>
              <div className="p-6 flex gap-10 justify-center">
                <Button
                  varient="outline"
                  onClick={() => {
                    setDeleteModal(false);
                  }}
                  btnText="Cancle"
                />
                <Button onClick={handleDelete} btnText="Delete" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contacts;

const AddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>
  );
};
