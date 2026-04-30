import React, { useEffect, useState } from 'react';
import { Github, GitCommit, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';
import config from '../data/config.json';

const GITHUB_USER = config.social.github.split('/').pop();

const EVENT_LABELS = {
  PushEvent: { label: 'Pushed to', icon: GitCommit, color: 'text-green-400' },
  WatchEvent: { label: 'Starred', icon: Star, color: 'text-yellow-400' },
  ForkEvent: { label: 'Forked', icon: GitFork, color: 'text-blue-400' },
  CreateEvent: { label: 'Created', icon: GitCommit, color: 'text-purple-400' },
};

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

const GitHubActivity = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=8`)
      .then(r => {
        if (!r.ok) throw new Error('rate limited');
        return r.json();
      })
      .then(data => {
        const filtered = data.filter(e => EVENT_LABELS[e.type]).slice(0, 6);
        setEvents(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error || (!loading && events.length === 0)) return null;

  return (
    <motion.div
      className="mt-12 p-6 bg-neutral-900/50 border border-neutral-800/60 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Github size={18} className="text-white" />
        <span className="text-sm font-semibold text-white">Recent GitHub Activity</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-500">live</span>
        </span>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 bg-white/5 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {events.map((event, i) => {
            const meta = EVENT_LABELS[event.type];
            const Icon = meta.icon;
            const commit = event.payload?.commits?.[0];
            const repoName = event.repo.name.split('/')[1];
            return (
              <motion.div
                key={event.id}
                className="flex items-start gap-3 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Icon size={14} className={`${meta.color} flex-shrink-0 mt-0.5`} />
                <span className="text-gray-400 flex-1 min-w-0">
                  <span className={`${meta.color} font-medium`}>{meta.label}</span>
                  {' '}
                  <a
                    href={`${config.social.github}/${repoName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {repoName}
                  </a>
                  {commit && (
                    <span className="text-gray-500 truncate block ml-0 pl-0">
                      {' — '}{commit.message.split('\n')[0].slice(0, 60)}
                    </span>
                  )}
                </span>
                <span className="text-gray-600 text-xs flex-shrink-0">{timeAgo(event.created_at)}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default GitHubActivity;
