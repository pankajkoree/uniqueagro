export default function ProductCard({ name, image, description, whatsapp }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={image} alt={name} className="h-40 w-full object-cover mb-3" />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        className="block mt-2 text-green-600 hover:underline"
      >
        Inquire via WhatsApp
      </a>
    </div>
  );
}
