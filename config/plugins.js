module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // Upload ayarları yerel depolama için gerekli değildir, bu yüzden Cloudinary ayarlarını kaldırıyoruz.
});
